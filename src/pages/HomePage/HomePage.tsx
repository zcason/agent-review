import type { FC } from "react";
import { useState } from 'react';
import Agents from "../../components/Agents/Agents";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";

const HomePage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cityOfPractice = (searchTerm: string) => setSearchTerm(searchTerm);

  return (
    <>
      <HomePageHeader cityOfPracitce={cityOfPractice}/>
      <Agents  searchTerm={searchTerm}/>
    </>
  );
};

export default HomePage;