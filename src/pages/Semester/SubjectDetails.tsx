import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Fade,
  Grow,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { Resource } from "../../components";

import { SEMESTERS } from "./semesters";

type Props = {
  subjectId?: string;
};

const SubjectDetails: React.FC<Props> = ({ subjectId }) => {
  const [selectedResourceType, setSelectedResourceType] = useState(0);
  const [subject, setSubject] = useState<Subject>();

  useEffect(() => {
    const editedSubjectId = subjectId?.substring(0, subjectId.length - 2);
    setSubject(
      SEMESTERS["I"].subjects.find((sub) => sub.id == editedSubjectId)
    );
  }, []);

  const bookReferenceToString = (br: BookReference) => {
    const splittedName = br.author?.split(" ") ?? [""];
    const lastName = splittedName[splittedName.length - 1].toUpperCase();
    const firstNames = splittedName
      .slice(0, splittedName.length - 1)
      .map((part) => part[0].toUpperCase())
      .join(". ");
    return `${lastName}, ${firstNames}. ${br.title}. ${br.edition}. ${
      br.city
    }: ${br.publisher}, ${br.year}. ISBN: ${br.isbn ?? "<does not have>"}`;
  };

  if (!subject) {
    return null;
  }

  return (
    <Container
      sx={{
        pt: 2,
        pb: 2,
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        top: "4em",
        overflow: "scroll",
        maxHeight: "calc(100vh - 4em)",
        gap: 3,
      }}
    >
      <Typography variant="h4">{subject.name}</Typography>

      <Divider />

      <Stack direction="column" gap={1}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Livros de referência:
        </Typography>

        {subject.bookReferences.map((bookReference) => (
          <Link
            href={bookReference.downloadLink}
            key={bookReference.id}
            download
            target="_blank"
            color="text.secondary"
            sx={{
              textDecoration: "none",
              ":hover": { textDecoration: "underline" },
            }}
          >
            <Typography variant="caption">
              {bookReferenceToString(bookReference)}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Tabs
        value={selectedResourceType}
        onChange={(e, newTab) => setSelectedResourceType(newTab)}
        variant="fullWidth"
      >
        <Tab label="Conteúdo em video" wrapped />
        <Tab label="Conteúdo em texto" wrapped />
      </Tabs>

      <Grow in={true} key={selectedResourceType}>
        <Stack direction="column" gap={3}>
          {(selectedResourceType === 0
            ? subject.videoResources
            : subject.textResources
          ).map(({ id, ...videoResource }) => (
            <Resource id={id} {...videoResource} />
          ))}
        </Stack>
      </Grow>
    </Container>
  );
};

export default SubjectDetails;
