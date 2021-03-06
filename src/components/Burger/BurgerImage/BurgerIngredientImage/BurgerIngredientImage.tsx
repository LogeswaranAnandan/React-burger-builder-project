import React from 'react';
import classes from './BurgerIngredientImage.module.css';
import Constants from '../../../../constants/constants';


class BurgerIngredientImage extends React.Component<any> {


    // render() {
    //     let ingredient = null;
    //     switch (this.props.type) {
    //         case 'bread-bottom':
    //             ingredient = <div className={classes.BlockText}>Bread Bottom</div>;
    //             break;
    //         case 'bread-top':
    //             ingredient = <div className={classes.BlockText}>Bread Top</div>;
    //             break;
    //         case 'meat':
    //             ingredient = <div className={classes.BlockText}>Meat</div>;
    //             break;
    //         case 'cheese':
    //             ingredient = <div className={classes.BlockText}>Cheese</div>;
    //             break;
    //         case 'salad':
    //             ingredient = <div className={classes.BlockText}>Salad</div>;
    //             break;
    //         case 'bacon':
    //             ingredient = <div className={classes.BlockText}>Bacon</div>;
    //             break;
    //         default:
    //             ingredient = null;
    //             break;
    //     }
    //     return ingredient;
    // }



    render() {
        let ingredient = null;
        switch (this.props.type) {
            case Constants.BREAD_BOTTOM:
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case Constants.BREAD_TOP:
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case Constants.MEAT:
                ingredient = <div className={classes.Meat}></div>;
                break;
            case Constants.CHEESE:
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case Constants.SALAD:
                ingredient = <div className={classes.Salad}></div>;
                break;
            case Constants.BACON:
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }

    // BurgerIngredientImage.propTypes = {
    //     type: PropTypes.string.isRequired
    // }
}

export default BurgerIngredientImage;