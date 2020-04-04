import React from 'react';
import './advantage.scss';

class Advantage extends React.Component {
    render() {
      return <div className="advantage">
                <div className="card">
                    <div className="header">
                        <p>{this.props.title}</p><span className="icon"><i class="fas fa-check-circle"></i></span>
                    </div>
                    <p className="detail">{this.props.detail}</p>
                </div>
            </div>;
    }
  }

export default Advantage;