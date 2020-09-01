
import React, { Component } from 'react'
import CardBody from './CardBody'
import { injectIntl } from 'react-intl'

class Card extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         convertTitle: ''
    //     }
    // }


    render() {

        const { body, cardTitle, cardSubtitle, cardClass, cardBodyClass, noHr ,title } = this.props
        const { intl } = this.props
        // const title = intl.formatMessage({ id: [cardTitle] });
        return (
            <div className={"card " + cardClass} key={""+ Math.random().toString(36).substr(2)}>
                <CardBody
                    {...this.props}
                    cardBodyClass={cardBodyClass}
                    cardTitle={cardTitle}
                    cardSubtitle={cardSubtitle}
                    noHr={noHr}
                >
                    {this.props.children}
                </CardBody>
            </div>
        )
    }
}
Card.defaultProps = {
    cardClass: "card border-top border-dark",
    cardTitle: "false",
    cardBodyClass: '',
    cardSubtitle: false
}
export default injectIntl(Card) 
