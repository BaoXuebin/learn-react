import React, { PropTypes } from 'react';
import OtherItem from './OtherItem';

import '../style/content.css';

const propTypes = {
    data: PropTypes.array.isRequired
};

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const contentHTML = data.map((item) => {
            if (item.type === 'others') {
                return <OtherItem key={item.id} data={item} />;
            }
            return null;
        });
        return (
            <div className="panel panel-default cr-content">
                <div className="panel-body">
                    {contentHTML}
                </div>
            </div>
        );
    }
}

Content.propTypes = propTypes;
export default Content;
