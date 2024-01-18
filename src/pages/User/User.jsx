import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import UserConfirmId from "../../components/UserConfirmId/UserConfirmId";
import ViewBasic from "../../components/ViewBasic/ViewBasic";
import "./User.css";

const initialState = {
    name: "",
    last_name: "",
    email: "",
};

const UserBuy = () => {
    const [values, setValues] = useState(initialState);
    const [confirmId, setConfirmId] = useState("");
    const { setCart } = useContext(DataContext);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "user"), {
            values,
        });
        setValues(initialState);
        setConfirmId(docRef.id);
        setCart([]);
    };

    return (
        <div className="form_container">
            {confirmId ? (
                <UserConfirmId confirmId={confirmId} />
            ) : (
                <div>
                    <ViewBasic />

                    <h2 className="form_title">
                        Ingresa tus datos para terminar la compra
                    </h2>
                    <form className="form" onSubmit={handleOnSubmit}>
                        <label htmlFor="name">Nombre. Debe tener al menoos 3 caracteres.</label>
                        <input
                            required
                            id="name"
                            className="form_input"
                            onChange={handleOnChange}
                            value={values.name}
                            type="text"
                            name="name"
                            placeholder="Ingresa un nombre de al menos tres letras"
                            pattern="^.{3,}$"
                        />
                        <label htmlFor="phone">Teléfono. Debe tener diez dígitos</label>
                        <input
                            required
                            id="phone"
                            className="form_input no-spinners"
                            onChange={handleOnChange}
                            value={values.phone}
                            type="number"
                            name="phone"
                            placeholder="Ingresa tu teléfono"
                            pattern="^[0-9]{9}$"
                        />
                        <label htmlFor="email">Email. Formato a@a.a</label>
                        <input
                            required
                            id="email"
                            className="form_input"
                            onChange={handleOnChange}
                            value={values.email}
                            type="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            pattern="^[^@]+@[^@]+\.[^@]+$"
                        />
                        <button className="form_button">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserBuy;
