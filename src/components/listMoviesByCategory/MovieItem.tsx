import { Flex, Img } from "@chakra-ui/react";
import { TMovieListItem } from "../../types/movieType";

interface IMovieItem {
  movie: TMovieListItem;
  onClick: (id: number) => void;
}

const MovieItem: React.FC<IMovieItem> = ({ movie, onClick }) => {
  return (
    <Flex
      display="inline-block"
      w="310px"
      h="180px"
      key={movie.id}
      cursor="pointer"
      onClick={() => onClick(movie.id)}
      justifyContent="center"
    >
      <Img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        key={movie.id}
        w="100%"
        transform="scale(0.9)"
        transition="all ease 0.2s"
        _hover={{
          transform: "scale(1)",
        }}
      />
    </Flex>
  );
};

export default MovieItem;
