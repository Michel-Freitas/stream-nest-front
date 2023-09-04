import {
  Avatar,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";

const Banner: React.FC = () => {
  return (
    <Container
      maxW="full"
      h="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundImage="https://image.tmdb.org/t/p/original/14F6gMaRjzgsN6EEpiwH87R1I00.jpg"
      display="flex"
      p="0px"
    >
      <Flex
        background="linear-gradient(to top, #111 10%, transparent 90%)"
        p="15px"
      >
        <Flex flexDirection="column" justifyContent="center">
          <Text fontSize="52px" fontWeight="700">
            Homem-Aranha: Através do Aranhaverso
          </Text>
          <Flex flexDir="column" w="40%">
            <Stack direction="row" alignItems="center">
              <Stack direction="row" alignItems="center">
                <AiFillStar color="#f0da17" size="22px" />
                <Text fontSize="18px" fontWeight="700">
                  8.4
                </Text>
                <Text fontSize="14px">| 3564</Text>
              </Stack>
              <TbPointFilled size="14px" />
              <Text>2023</Text>
            </Stack>
            <Text>
              Miles Morales retorna para o próximo capítulo da saga do
              Aranhaverso, uma aventura épica que transportará o Homem-Aranha em
              tempo integral e amigável do bairro do Brooklyn através do
              Multiverso para unir forças com Gwen Stacy e uma nova equipe de
              Homens-Aranha para enfrentar com um vilão mais poderoso do que
              qualquer coisa que eles já encontraram.
            </Text>
            <Stack direction="row" marginTop="12px" marginBottom="12px">
              <Button w="35%" backgroundColor="#d1cdca">Minha Lista</Button>
              <Button w="35%" background="rgba(109, 109, 110, 0.7)" color="#ffffff">Mais Informaçõe</Button>
            </Stack>
            <Flex>
              <Text>Gêneros:</Text>
              <Text>Animação, Ação, Aventura, Ficção Científica</Text>
            </Flex>
            <Flex flexDirection="column" gap="12px">
              <Text fontSize="18px">Atores principais:</Text>
              <Wrap spacing="25px">
                <WrapItem flexDirection="column" alignItems="center">
                  <Avatar
                    src="https://image.tmdb.org/t/p/original/uJNaSTsfBOvtFWsPP23zNthknsB.jpg"
                    size="lg"
                  />
                  <Text>Shameik Moore</Text>
                </WrapItem>
                <WrapItem flexDir="column" alignItems="center">
                  <Avatar
                    src="https://image.tmdb.org/t/p/original/q4UpZMEuvNCN5lL5L6xa3ICpheJ.jpg"
                    size="lg"
                  />
                  <Text>Hailee Steinfeld</Text>
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Banner;
