import  React, { Component } from "react";
import './Body.css'
import HeroImage from "../HeroImage/HeroImage";
import { NewsItems } from "./NewsItems";


class Body extends Component {
    render() {
        return (
            <div className="body-container">

            <HeroImage></HeroImage>
                <div className="section-container">
                    <div className="section-header">
                        <div className="section-bullet">
                            
                        </div>
                        <h4 className="section-title">
                            SAMPLE1
                        </h4>

                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lacinia dui. Pellentesque quis pellentesque ligula. Duis sit amet purus id ligula commodo placerat. Nunc a mauris sed ex porta lacinia. Aenean vel elementum erat. Ut non quam eu ipsum varius rutrum a vitae ligula. Mauris eget tincidunt tellus. Aenean luctus, velit a lacinia molestie, erat elit interdum leo, non consectetur dui nisl consequat leo. Proin quis sapien eleifend, convallis orci at, vestibulum nibh. Nunc scelerisque lacus ac turpis hendrerit eleifend. Nam vel porttitor metus, in vestibulum ex. Donec urna justo, imperdiet id dictum non, pharetra id est. Proin facilisis ipsum quis lorem mollis, id tempus sapien congue. Nullam placerat nisl vitae augue rutrum, ac interdum lorem aliquet. Vivamus lectus odio, gravida vitae feugiat nec, iaculis quis mi. Proin venenatis mauris dolor, at aliquet lectus efficitur eu.
                    </p>
                </div>

                <div className="section-container">
                    <div className="section-header">
                        <div className="section-bullet">
                            
                        </div>
                        <h4 className="section-title">
                            NEWS
                        </h4>
                    </div>
                    <table className="news-table">
                        <tbody>
                            {NewsItems.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="date-column">
                                            {item.date}
                                        </td>
                                        <td className="title-column">
                                            {item.title}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="more-info">
                        <a href="#">
                            <i className="fas fa-info-circle"></i>More Information
                        </a>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Body