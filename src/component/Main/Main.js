import React from 'react';

const Main = () => {
    const reasonsData = [
        {
            id: '0',
            number: 1,
            title: 'Data and Information Supply Chain Provider',
            description: 'Datatellers provides technological solutions that improve customer performance in terms of cost reduction, increase in turnover and improvement of production efficiency. The value creation process occurs through the measurement, management and monetization of information along the data supply chain.'
        },
        {
            id: '1',
            number: 2,
            title: 'Technology: a must have',
            description: 'Datatellers works with companies that are aware of the importance of investing in innovative technologies to increase competitiveness.'
        },
        {
            id: '2',
            number: 3,
            title: 'Successful results',
            description: 'Datatellers helps its customers to reduce costs, increase productivity, create new revenue streams from data already present within the organization, stay two steps ahead of competitors.'
        },
        {
            id: '3',
            number: 4,
            title: 'Transform the business, not just the IT department',
            description: 'Datatellers works with those companies that want solutions that allow them to achieve their business goals, but at the same time are easy to use and implement. The ideal solution is a rapid return on investment that does not require the customer to intervene on the information systems and technologies already present.'
        },
        {
            id: '4',
            number: 5,
            title: 'Data and AI at the service of companies',
            description: 'Datatellers accompanies its customers towards measurable objectives: 100% ROI in 12 months; + 30% in productivity; -80% risk of human error. Zero business interruption, no system migration.'
        },
        {
            id: '5',
            number: 6,
            title: 'A trusted partner',
            description: 'Datatellers is a discreet, reliable and trustworthy technology partner. Our confidentiality standards in data processing are those of Defense contracts, our datacenters are hyperconverged and redundant, our systems are full compliance in terms of security.'
        }
    ]
    return (
        <div style={{ backgroundColor: "rgb(198, 213, 232)" }}>
            <div className="container pt-5 pb-5">
                <div className="row ">
                    {
                        reasonsData.map(data => <div className="col-md-4 col-sm-6">
                            <h1 className="text-primary">{data.number}</h1>
                            <h4>{data.title}</h4>
                            <p className="text-secondary">{data.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Main;