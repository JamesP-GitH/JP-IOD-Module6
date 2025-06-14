import React from "react";
import SingleCat from "./SingleCat";
import { useState } from "react";

const cats = [
    {
        id: 1,
        name: "Cheetah",
        latinName: "Acinonyx jubatus",
        image: "https://media.istockphoto.com/id/1758173843/photo/a-fast-running-cheetah-taking-a-turn-to-the-left-from-the-front.jpg?s=612x612&w=0&k=20&c=KZbaAy1djko95TsGqjY2RXf_IbdGSE3Tuv1_NYcM7ws=",
    },
    {
        id: 2,
        name: "Cougar",
        latinName: "Puma concolor",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
    },
    {
        id: 3,
        name: "Jaguar",
        latinName: "Panthera onca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
    },
    { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "https://www.krugerpark.co.za/images/leopard-kruger-rh-786x500.jpg" },
    {
        id: 5,
        name: "Lion",
        latinName: "Panthera leo",
        image: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg",
    },
    {
        id: 6,
        name: "Snow leopard",
        latinName: "Panthera uncia",
        image: "https://files.worldwildlife.org/wwfcmsprod/images/Snow_Leopard_hero_species_2021/hero_small/8hwbyi3z8p_species_snowleopard_hero.jpg",
    },
    {
        id: 7,
        name: "Tiger",
        latinName: "Panthera tigris",
        image: "https://media.istockphoto.com/id/1420676204/photo/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.jpg?s=612x612&w=0&k=20&c=0OCYv99Ktv3fJ-YYlg7SetHBJj3pIk58WY7GDy5VCtI=",
    },
];

const BigCats = () => {
    const [catsList, setCatsList] = useState(cats);
    const [latinFilter, setLatinFilter] = useState("");

    function handleSort(sortOption) {
        const updatedList = [...catsList];
        switch (sortOption) {
            case "name-asc":
                updatedList.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                updatedList.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        setCatsList(updatedList);
    }

    function handleLatinFilter(value) {
        const filteredList = cats.filter((cat) => cat.latinName.toLowerCase().includes(value.toLowerCase()));

        setCatsList(filteredList);
    }

    return (
        <div>
            <h2>Big Cats List</h2>
            <button onClick={() => handleSort("name-asc")}>Sort A-Z</button>
            <button onClick={() => handleSort("name-desc")}>Sort Z-A</button> <br />
            <input
                type="text"
                placeholder="Filter by Latin name"
                value={latinFilter}
                onChange={(e) => {
                    const value = e.target.value;
                    setLatinFilter(value);
                    handleLatinFilter(value);
                }}
            />
            <ul style={{ listStyle: "none", padding: 0 }}>
                {catsList.map((cat) => (
                    <li key={cat.id}>
                        <SingleCat name={cat.name} latinName={cat.latinName} image={cat.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BigCats;
