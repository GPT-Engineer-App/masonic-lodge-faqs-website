import { Container, Text, VStack, Heading, Box, IconButton, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const faqs = [
  {
    question: "What is Freemasonry?",
    answer: "Freemasonry is one of the world's oldest and largest fraternal organizations. It is a society of men concerned with moral and spiritual values.",
  },
  {
    question: "What do Freemasons do?",
    answer: "Freemasons meet regularly to discuss moral and philosophical issues, perform charitable works, and engage in social activities.",
  },
  {
    question: "Is Freemasonry a religion?",
    answer: "No, Freemasonry is not a religion. It requires a belief in a Supreme Being, but it is not tied to any specific religious doctrine.",
  },
  {
    question: "How can I become a Freemason?",
    answer: "To become a Freemason, you must be a man of good character, believe in a Supreme Being, and be recommended by current members.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Solomon Lodge No. 5
          </Heading>
          <Text fontSize="lg">Welcome to the official website of Solomon Lodge No. 5. We are a Masonic Lodge dedicated to the principles of brotherhood, charity, and truth.</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1601758123927-1a9f3b8c8c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXNvbmljJTIwbG9kZ2V8ZW58MHx8fHwxNjE1Njk4Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Masonic Lodge" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Frequently Asked Questions
          </Heading>
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Us
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
