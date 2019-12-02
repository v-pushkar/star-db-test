
import ItemList from "./../item-list";
import { withData, withSwapiService } from "./../hoc";


const mapPersonMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapStarshipMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllStarships
    }
};
const mapPlanetMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const PersonList = withSwapiService(withData(ItemList), mapPersonMethodsToProps);

const StarshippList = withSwapiService(withData(ItemList), mapStarshipMethodsToProps);

const PlanetList = withSwapiService(withData(ItemList), mapPlanetMethodsToProps);

export { PersonList, StarshippList, PlanetList };
 