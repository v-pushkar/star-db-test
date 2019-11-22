export default class SwapiService {
  _apiBase = "https://swapi.co/api/";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${this._apiBase}${url},
        resived ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
  async getAllPeople() {
    const res = await this.getResource(`people/`);
    return res.results.map(this._transformPeople);
  }
  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPeople(person);
  }
  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }
  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }
  async getStarship(id) {
    const ship = this.getResource(`starships/${id}/`);
    return this._transformStarship(ship);
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    // console.log("item", item);
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => {
    return {
      //   id: this._extractId(planet),
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate
    };
  };
  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      constInCredits: starship.constInCredits,
      length: starship.length,
      crew: starship.crew,
      pasengers: starship.pasengers,
      cargoCapacity: starship.cargoCapacity
    };
  };
  _transformPeople = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eye_color: person.eye_color,
      hair_color: person.hair_color
    };
  };
}
