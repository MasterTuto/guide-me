import {
  Face,
  LightbulbOutlined,
  Schedule,
  Language as LanguageIcon,
} from "@mui/icons-material";
import {
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

type Props = Resource;

const Resource: React.FC<Props> = ({
  author,
  id,
  link,
  relevance,
  title,
  description,
  duration = 0,
  platform,
  thumbnail,
}) => {
  const min = ("00" + (duration / 60).toFixed(0)).match(/\d{2}$/);
  const sec = ("00" + (duration % 60).toFixed(0)).match(/\d{2}$/);
  const formattedDuration = `${min}:${sec}`;

  const openLink = () => {
    window.open(link);
  };

  return (
    <ButtonBase sx={{ textAlign: "left" }} onClick={openLink}>
      <Card>
        <CardMedia component="img" src={thumbnail} />

        <CardContent>
          <Stack direction="row" gap={2}>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: "0.2em" }}
            >
              <LightbulbOutlined fontSize="small" />
              {relevance * 100}%
            </Typography>

            {platform && (
              <Link
                href={platform.baseUrl}
                target="_blank"
                color="text.secondary"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2em",
                    textTransform: "none",
                  }}
                >
                  <LanguageIcon fontSize="small" />
                  {platform.name}
                </Typography>
              </Link>
            )}
          </Stack>

          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>

          <Typography variant="caption">{description}</Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: "0.2em" }}
          >
            <Face fontSize="small" />
            {author}
          </Typography>

          <Typography
            color="text.secondary"
            variant="overline"
            sx={{ display: "flex", alignItems: "center", gap: "0.2em" }}
          >
            <Schedule fontSize="small" />
            {formattedDuration}
          </Typography>
        </CardActions>
      </Card>
    </ButtonBase>
  );
};

export default Resource;
