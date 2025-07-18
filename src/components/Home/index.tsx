'use client'

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {

    const [itemList, setItemList] = useState([
        {
            "id": 0,
            "item": "sock",
            "amount": 3,
            "checked": false
        },
        {
            "id": 1,
            "item": "shirt",
            "amount": 5,
            "checked": false
        }
    ]);

    return (
        <div>
            <Header />
            <SearchBar itemList={itemList} setItemList={setItemList} />
            <Content itemList={itemList} setItemList={setItemList} />
            <Footer itemList={itemList} />
        </div>
    );
}
