import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import firstSemester from "../../assets/img/svg/semester-1.png";
import secondSemester from "../../assets/img/svg/semester-2.png";
import thirdSemester from "../../assets/img/svg/semester-3.png";
import fourthSemester from "../../assets/img/svg/semester-4.png";
import fifthSemester from "../../assets/img/svg/semester-5.png";
import sixthSemester from "../../assets/img/svg/semester-6.png";
import seventhSemester from "../../assets/img/svg/semester-7.png";
import eighthSemester from "../../assets/img/svg/semester-8.png";
import optatives from "../../assets/img/svg/optatives.png";

import React from "react";
import { useNavigate } from "react-router-dom";

const SEMESTERS: Semester[] = [
  { id: "I", name: "1º Semestre", icon: firstSemester, subjects: [] },
  { id: "II", name: "2º Semestre", icon: secondSemester, subjects: [] },
  { id: "III", name: "3º Semestre", icon: thirdSemester, subjects: [] },
  { id: "IV", name: "4º Semestre", icon: fourthSemester, subjects: [] },
  { id: "V", name: "5º Semestre", icon: fifthSemester, subjects: [] },
  { id: "VI", name: "6º Semestre", icon: sixthSemester, subjects: [] },
  { id: "VII", name: "7º Semestre", icon: seventhSemester, subjects: [] },
  { id: "VIII", name: "8º Semestre", icon: eighthSemester, subjects: [] },
  { id: "Optativas", name: "Optativas", icon: optatives, subjects: [] },
];

const Semesters = () => {
  const navigate = useNavigate();
  const [semesters, setSemesters] = React.useState(SEMESTERS);

  const goToSemester = (id: string) => {
    navigate(`/semester/${id}`);
  };

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h3">Semestres</Typography>
      <Typography>
        Escolha o semestre que você está para localizar a disciplina que você
        está procurando! Todas as disciplinas estão disponíveis
      </Typography>

      <Divider sx={{ mt: 2, mb: 2 }} />

      <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={3}>
        {semesters.map((semester) => (
          <ButtonBase onClick={() => goToSemester(semester.id)}>
            <Card
              key={semester.id}
              sx={{
                width: "200px",
                cursor: "pointer",
                ":hover": {
                  boxShadow: 10,
                },
              }}
            >
              <CardMedia
                component="img"
                image={semester.icon}
                height="130px"
                alt={`Image for '${semester.name}' semester`}
                sx={{
                  opacity: 0.5,
                  objectFit: "contain",
                }}
              />

              <CardContent>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {semester.name}
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
};

export default Semesters;
