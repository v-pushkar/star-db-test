import React from "react";
import ItemList from "./../item-list";
import { addData } from "./../hoc";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPeople, getAllPlanets, getAllStarships
} = swapiService

const PersonList = addData(ItemList, getAllPeople);

const StarshippList = addData(ItemList, getAllStarships);

const PlanetList = addData(ItemList, getAllPlanets);

export { PersonList, StarshippList, PlanetList };
