import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Steps, Icon } from 'antd';
import './Navigation.css';

class Navigation extends React.Component {

    getStep = () => {
        switch (this.props.location.pathname) {
            case '/': return 0;
            case '/add-words': return 1;
            case '/preview': return 2;
            case '/print': return 3;
            default: return -1;
        }
    }

    navigateTo = (location) => {
        this.props.history.push(location);
    }

    getStepper = () => {
        const activeStep = this.getStep(),
        {lang} = this.props;

        return (
            <Steps current={activeStep} className="navigation-stepper">
                <Steps.Step title={lang.MENU_SETUP_GRID} onClick={() => this.navigateTo('/')} />
                <Steps.Step title={lang.MENU_ADD_WORDS} onClick={() => this.navigateTo('/add-words')} />
                <Steps.Step title={lang.MENU_PREVIEW} onClick={() => this.navigateTo('/preview')} />
                <Steps.Step title={lang.MENU_PRINT} onClick={() => this.navigateTo('/print')} />
            </Steps>
        );
    }


    render() {
        return this.props.navButtons
            ? this.getNavButtons()
            : this.getStepper();
    }

}

Navigation.propTypes = {
    lang: PropTypes.object.isRequired
};

export default withRouter(Navigation);