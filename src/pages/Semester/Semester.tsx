import {
  Box,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Grow,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TransitionGroup } from "react-transition-group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { SEMESTERS } from "./semesters";
import SubjectDetails from "./SubjectDetails";

const subjectDataVariants = {
  visible: { opacity: 1, scale: 1, width: "40vw" },
  hidden: { opacity: 0, scale: 0, width: 0 },
};

const Semester = () => {
  const params = useParams();
  const theme = useTheme();
  const [selectedSubject, setSelectedSubject] = useState<string>();
  const [semester, setSemester] = useState<Semester>();

  useEffect(() => {
    const semesterId = params.semesterId as string;
    setSemester(SEMESTERS["I"]);
  }, []);

  const switchSubject = (subjectId: string) => {
    if (selectedSubject === subjectId) setSelectedSubject(undefined);
    else setSelectedSubject(subjectId);
  };

  if (!semester) {
    return undefined;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Grow in={true}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3">{semester.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Lista de conteúdos cadastrados para este semestre.
          </Typography>
          <Divider />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              pl: 3,
              pr: 3,
            }}
            gap={3}
          >
            {semester.subjects.map((subject, index) => (
              <ButtonBase
                key={`${subject.id}-${index}`}
                onClick={() => switchSubject(`${subject.id}-${index}`)}
                sx={{ width: "46%" }}
              >
                <Card
                  sx={{
                    cursor: "pointer",
                    backgroundColor: theme.palette.background.paper,

                    ":hover": {
                      boxShadow: 10,
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="150vw"
                      image={subject.icon}
                      sx={{ objectFit: "contain", opacity: 0.7 }}
                    />
                    {`${subject.id}-${index}` === selectedSubject && (
                      <Typography
                        sx={{
                          position: "absolute",
                          top: 0,
                          backgroundColor:
                            theme.palette.mode === "dark" ? "#fffa" : "#000a",
                          display: "flex",
                          color:
                            theme.palette.mode === "dark"
                              ? "common.black"
                              : "common.white",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        Lendo
                      </Typography>
                    )}
                  </Box>
                  <CardContent>
                    <Typography variant="h6">{subject.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {subject.description}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3em",
                      }}
                    >
                      <AccessTimeIcon />
                      <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        Carga horária:
                      </Typography>
                      <Typography variant="caption">
                        {subject.workload} hrs
                      </Typography>
                    </Box>
                  </CardActions>
                </Card>
              </ButtonBase>
            ))}
          </Box>
        </Box>
      </Grow>

      <motion.div
        animate={!!selectedSubject ? "visible" : "hidden"}
        variants={subjectDataVariants}
        transition={{ duration: 0.5 }}
      >
        <SubjectDetails
          subjectId={selectedSubject}
          key={`${selectedSubject}`}
        />
      </motion.div>
    </Box>
  );
};

export default Semester;
