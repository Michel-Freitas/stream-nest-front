import { Container, Stack } from "@chakra-ui/react";
import movieListMock from "../../mock/movieListMock.json";
import ListMoviesyCategory from "../../components/listMoviesByCategory";
import Banner from "../../components/Banner";

const HomePage: React.FC = () => {
  return (
    <Container maxW="full" p="0px">
      <Banner />
      <Stack marginTop="-160px">
        {movieListMock.map((item) => {
          return (
            <ListMoviesyCategory
              categoryTitle={item.title}
              key={item.title}
              movieList={item.data.results.map((subItem) => {
                return {
                  id: subItem.id,
                  backdrop_path: subItem.backdrop_path,
                };
              })}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default HomePage;
