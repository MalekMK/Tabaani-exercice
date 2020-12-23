import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MediaCard from "./components/MediaCard";
import NavAppBar from "./components/NavAppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const handleClick = () => {
    setCount(count + 10);
    setDisplayedData(allData.slice(0, count + 10));
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/photos");
      let allData = [];
      result.data.forEach((elt, index) => {
        if (
          elt.albumId % 2 === 0 &&
          allData.findIndex((element) => element.albumId === elt.albumId) === -1
        ) {
          allData.push(elt);
        }
      });
      setAllData(allData);
      setDisplayedData(allData.slice(0, 10));
      setLoading(true);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <header className="App-header">
        <NavAppBar />
        {loading ? (
          <Container>
            <div style={{ width: "100%", marginTop: 45 }}>
              <Box
                justifyContent="center"
                display="flex"
                flexWrap="wrap"
                css={{ maxWidth: "auto" }}
              >
                {displayedData.map((data) => {
                  return <MediaCard key={data.id} data={data} />;
                })}
              </Box>
              {count < 50 && (
                <Box p={5} textAlign="center">
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick()}
                  >
                    More
                  </Button>
                </Box>
              )}
            </div>
          </Container>
        ) : (
          <div style={{ width: "100%", marginTop: 45 }}>
            <Box p={5} textAlign="center">
              <LoadingComponent />
            </Box>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
