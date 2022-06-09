import { Fragment } from "react/cjs/react.production.min";

import MealsSummary from "./MealsSummary";
import AvaiableMeals from "./AvaiableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvaiableMeals />
        </Fragment>
    );
};

export default Meals;