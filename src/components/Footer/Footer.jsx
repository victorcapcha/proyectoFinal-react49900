import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_container_social">
                <h2>Reservas</h2>
                <h5>tel: 55 55555555</h5>
            </div>
            <div className="footer_container_map">
                <h2>Piltriquitron</h2>
                <h5>El Bolsón, Río Negro</h5>
                <h6>Argentina</h6>
            </div>
            <div className="footer_container_copy">
                <h6>Beber con moderación</h6>
                <h6>Prohibida su venta a menores de 18 años</h6>
                <h6>Creado por: Victor Capcha Cajavilca</h6>
            </div>
        </div>
    );
};

export default Footer;
