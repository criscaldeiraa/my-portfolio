import './my-work.styles.css';
import { dataportfolio, dataportfolio1, dataportfolio2 } from "../../content";


const MyWork = () => {
    return (
        <div className="work-container">
            <div className="">
                <div >
                    <h1 > Portfolio </h1>
                    <hr className="underline" />
                </div>
            </div>

            <div className='category-title'>
                <h3>Best Projects</h3>
            </div>
            <div className="port-container">
                {dataportfolio.map((data, i) => {
                    return (
                    <div key={i} className="port-item">
                        <img src={data.img} alt={data.description} />
                        <div className="content">
                            <p>{data.description}</p>
                            <a className='item-link code' href={data.codeLink}>view code</a>
                            <a className='item-link website' href={data.websiteLink}>view website</a>
                        </div>
                    </div>
                    );
                })}
            </div>

            <div className='category-title'>
                <h3>Fun Resources</h3>
            </div>
            <div className="port-container">

                {dataportfolio1.map((data, i) => {
                    return (
                    <div key={i} className="port-item">
                        <img src={data.img} alt={data.description} />
                        <div className="content">
                        <p>{data.description}</p>
                        <a className='item-link code' href={data.codeLink}>view code</a>
                        <a className='item-link website' href={data.websiteLink}>view website</a>
                        </div>
                    </div>
                    );
                })}
            </div>

            <div className='category-title'>
                <h3>Mini Games</h3>
            </div>
            <div className="port-container">

                {dataportfolio2.map((data, i) => {
                    return (
                    <div key={i} className="port-item">
                        <img src={data.img} alt={data.description} />
                        <div className="content">
                        <p>{data.description}</p>
                        <a className='item-link code' href={data.codeLink}>view code</a>
                        <a className='item-link website' href={data.websiteLink}>view website</a>
                        </div>
                    </div>
                    );
                })}
            </div>

        </div>
    )
}

export default MyWork;