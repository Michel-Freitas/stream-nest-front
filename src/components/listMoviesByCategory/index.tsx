import { Flex, Stack, Text } from "@chakra-ui/react";
import MovieItem from "./MovieItem";
import { TMovieListItem } from "../../types/movieType";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

interface IListMoviesByCategory {
  categoryTitle: string;
  movieList: TMovieListItem[];
}

enum TypeAction {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

const ListMoviesyCategory: React.FC<IListMoviesByCategory> = ({
  categoryTitle,
  movieList,
}) => {
  const [scrollX, setScrollX] = useState<number>(0);

  const selectingMovie = (id: number) => alert(`Clicou ${id}`);

  const scrollAction = (type: TypeAction) => {
    const userScreen = Math.round(window.innerWidth / 2);

    switch (type) {
      case TypeAction.LEFT:
        setScrollX(state => state > 0 ? state + userScreen : 0 );
        break;
      case TypeAction.RIGHT:
        setScrollX(state => state - userScreen );
        break;
      default:
        setScrollX(0);
        break;
    }
  }

  return (
    <Flex flexDirection="column" marginBottom="25px" gridGap="12px">
      <Text fontSize="22px" marginLeft="15px" fontFamily="Roboto">
        {categoryTitle}
      </Text>
      <Stack>
        <Flex
          background="rgb(0, 0, 0, 0.6)"
          position="absolute"
          left="0"
          w="40px"
          h="190px"
          marginTop="-7px"
          justifyContent="center"
          alignItems="center"
          zIndex="99"
          cursor="pointer"
          transition="all ease 0.5s"
          onClick={() => scrollAction(TypeAction.LEFT)}
        >
          <MdOutlineNavigateBefore size="40px" />
        </Flex>
        <Flex
          background="rgb(0, 0, 0, 0.6)"
          position="absolute"
          right="0"
          w="40px"
          h="190px"
          marginTop="-7px"
          justifyContent="center"
          alignItems="center"
          zIndex="99"
          cursor="pointer"
          transition="all ease 0.5s"
          onClick={() => scrollAction(TypeAction.RIGHT)}
        >
          <MdOutlineNavigateNext size="40px" />
        </Flex>
        <Flex overflowX="hidden">
          <Flex marginLeft={scrollX} transition="all ease 0.7s">
            {movieList.map((item) => {
              return <MovieItem movie={item} onClick={selectingMovie} />;
            })}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ListMoviesyCategory;
