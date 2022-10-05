import React from "react";
import "./footer.css"

const footer = {
        company: {
          addressLine1: "Brzozowa 23",
          addressLine2: "Katowice 40-000",
          phone: "+48123456977",
          mail: "mail@example.com",
          name: "ABGF Sp. z o. o.",
          logo: "link-to-image"
        },
        socials: {
          fb: "facebook.com",
          instagram: "instagram.com",
          twitter: "twitter.com"
        },
        links: {
          help: "/help",
          pay: "/pay",
          agreement: '/agreement',
          dashboard: '/dashboard',
          reading: '/reading',
          reports: '/reports',
        }
      };


const Company = () => {
    if(typeof footer.company != "undefined"){
        return ([
                <div className="info">
                    <h3>Info</h3>
                    <p>{footer.company.name}</p>
                    <div className="logo-container">
                        <img src={footer.company.logo} alt="logo" />
                    </div>
                    <p>{footer.company.addressLine1}</p>
                    <p>{footer.company.addressLine2}</p>
                </div>,
                <div className="contact">
                    <h3>Contact</h3>
                    <p>{footer.company.phone}</p>
                    <p>{footer.company.mail}</p>
                </div>]
        )
    }
}

const Socials = () => {
    if(typeof footer.socials != "undefined") {
        return (
            <div>
                <h3>Socials</h3>
                <div className="socials">
                    <a href={'https://' + footer.socials.fb} target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="fb-ico" /></a>
                    <a href={'https://' + footer.socials.instagram} target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="instagram-ico" /></a>
                    <a href={'https://' + footer.socials.twitter} target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png" alt="twitter-ico" /></a>
                </div>
            </div>
        )
    }
}

const Links = () => {
    if(typeof footer.links != "undefined"){
        return (
            <div>
                <h3>Links</h3>
                <div className="links">
                {
                    Object.keys(footer.links).map(el => (
                        <a href={el}>{el}</a>
                    )
                    )
                }
                </div>
            </div>
        )
    }
}

const Footer = () => {
    return (
        <footer>
            <Company/>
            <Socials/>
            <Links/>
        </footer>
    )
}

export default Footer;