/* import axios from 'axios';

export function getData(character) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${character}`)
    .then((res) => {
      const data = res.data.results;
      const myData = [];
      data.forEach((element) => {
        let name = element.name;
        let image = element.image;
        myData.push({ name, image });
      });
      console.log(myData);
    })
    .catch((error) => {
      console.error(error);
    });
}
 */
