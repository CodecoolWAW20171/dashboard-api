import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import GitHubTable from "../GitHubTable/GitHubTable";
import PanelHoc from "../Panel/Panel";
import InfoPage from "../InfoPage/InfoPage";


// todo - all components. For now beta for testing purposes
export const ControlledCarousel = props => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    const GitHubTableOnPanel = PanelHoc(GitHubTable);
    const InfoPanel = PanelHoc(InfoPage);



    return (
        /* interval={10000} activeIndex={index} */
        <div  direction={direction} onSelect={handleSelect}  >
            {/*<Carousel.Item>*/}
                <InfoPanel/>
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item>*/}
            {/*    <GitHubTableOnPanel/>*/}
            {/*</Carousel.Item>*/}

            <Carousel.Item>
                <div className="container">
                    <p>rrrrrrrrrrrrr</p>
                    <p>rrrrrrrrrrrrr</p>
                    <p>rrrrrrrrrrrrr</p>
                    <p>rrrrrrrrrrrrr</p>
                    <p>rrrrrrrrrrrrr</p>
                </div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </div>
    )
};


