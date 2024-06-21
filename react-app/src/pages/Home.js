import React from "react";
import Image1 from "../img/image1.png";
import Rect2 from "../img/Rectangle2.png";
import Img1 from "../img/img1.png";
import Img2 from "../img/img2.png";
import Img3 from "../img/img3.png";
import Rect3 from "../img/Rectangle3.png";
import Rect4 from "../img/Rectangle4.png";
import Dove from "../img/dove.png";
import Nivea from "../img/nivea.png";
import Palmolive from "../img/palmolive.png";
import Vanish from "../img/vanish.png";
import Ajax from "../img/ajax.png";
import Cif from "../img/cif.png";

class Home extends React.Component {
    render() {
        const mainContent = {
            title: "DVG Company",
            subtitle: "Veleprodaja i maloprodaja kozmetike i kućne hemije",
            description: `DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici.
                Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije.
                U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi
                distributivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora
                koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.`,
            buttonText: "Saznajte više o nama"
        };

        const images = {
            Img1,
            Img2,
            Img3,
            Rect2,
            Rect3,
            Rect4,
            Dove,
            Nivea,
            Palmolive,
            Vanish,
            Ajax,
            Cif
        };

        const boxes = [
            { img: images.Img1, alt: "1", text: "postanine naš partner", aos: "fade-up-right", duration: "1000" },
            { img: images.Img2, alt: "2", text: "naši proizvodi", aos: "fade-up", duration: "1000" },
            { img: images.Img3, alt: "3", text: "uvoz iz mađarske", aos: "fade-up-left", duration: "1000" }
        ];

        const stats = [
            { value: "3.000", sub: "m", sup: "2", desc: "Magacinskog prostora" },
            { value: "20", desc: "Vozila" },
            { value: "8", desc: "Komercialista" },
            { value: "170", desc: "Brendova" }
        ];

        const brands = [
            { img: images.Dove, alt: "l1", text: "Dove" },
            { img: images.Nivea, alt: "l2", text: "Nivea" },
            { img: images.Palmolive, alt: "l3", text: "Palmolive" },
            { img: images.Vanish, alt: "l4", text: "Vanish" },
            { img: images.Ajax, alt: "l5", text: "Ajax" },
            { img: images.Cif, alt: "l6", text: "Cif" }
        ];

        return (
            <div>
                <div className="container" id="dvg">
                    <div className="lbox">
                        <img src={Image1} alt="i1" />
                    </div>
                    <div className="rbox">
                        <h1>{mainContent.title}</h1>
                        <h2>{mainContent.subtitle}</h2>
                        <h4>{mainContent.description}</h4>
                        <button type="button">{mainContent.buttonText}</button>
                    </div>
                </div>

                <div className="image-container">
                    <div className="centered-text-container">
                        <div className="centered-text">pouzdana distribucija<br /><img src={Rect2} alt="red1" /></div>
                    </div>
                </div>

                <div className="container3">
                    {boxes.map((box, index) => (
                        <div key={index} className="lbox" data-aos={box.aos} data-aos-duration={box.duration}>
                            <img src={box.img} alt={box.alt} /><h3>{box.text}</h3>
                        </div>
                    ))}
                </div>

                <div className="mcontainer3">
                    {boxes.map((box, index) => (
                        <div key={index} className="lbox">
                            <img src={box.img} alt={box.alt} /><h3>{box.text}</h3>
                        </div>
                    ))}
                </div>

                <div className="title">
                    <h1>{mainContent.title}</h1>
                    <h2>u brojkama</h2>
                    <img src={Rect2} alt="red2" />
                </div>

                <div className="nums">
                    <div className="container4">
                        {stats.map((stat, index) => (
                            <div key={index} className="box">
                                {stat.sup ? <span className="h1"><h1>{stat.value}<sub>{stat.sub}</sub><sup>{stat.sup}</sup></h1></span> : <span><h1>{stat.value}</h1></span>}
                                <span><h4>{stat.desc}</h4></span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="silver slider-container">
                    <h2>Naši proizvodi</h2>
                    <img className="line" src={Rect3} alt="grect" />
                    <h4>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna<br />
                        nega lica I tela. Uspeli smo da uskladimo kvalitet és cenu, što su prepoznali i naši<br />
                        kupci.
                    </h4>
                </div>

                <div className="last">
                    <h2>Istaknuti brendovi za koje radimo<br />distribuciju</h2>
                    <img className="line2" src={Rect4} alt="stripe" />
                    <div className="container6">
                        {brands.map((brand, index) => (
                            <div key={index} className="box" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration={index % 2 === 0 ? "1500" : "1000"}>
                                <img src={brand.img} alt={brand.alt} />
                                <div><p>{brand.text}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="mcontainer6">
                        {brands.map((brand, index) => (
                            <div key={index} className="box">
                                <img src={brand.img} alt={brand.alt} />
                                <div><p>{brand.text}</p></div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button type="button">Svi brendovi u našem portfoliju</button>
                    </div>
                </div>

                <div className="popup" id="popup">
                    <div className="popup-content">
                        <span className="close" id="close-popup">&times;</span>
                        <h2>Welcome to Our Website!</h2>
                        <p>We're glad you're here. Enjoy your stay and explore our amazing content.</p>
                        <button id="popup-button">Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
