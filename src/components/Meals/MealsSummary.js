import classes from "./MealsSummary.module.css";

const Meals = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you!</h2>
      <p>
        Choose Your favourite meals form our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        ofcourse by experienced chefs!
      </p>
    </section>
  );
};

export default Meals;
