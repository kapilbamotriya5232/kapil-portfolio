"use client";

import React from "react";
import { Button, Row, IconButton, useTheme } from "@once-ui-system/core";

export const ResumeButton: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <React.Fragment>
      <Row s={{ hide: true }}>
        <Button
          href="/resume/Kapil_Bamotriya_resume.pdf"
          download="Kapil_Bamotriya_Resume.pdf"
          size="s"
          weight="default"
          variant="secondary"
        >
          <Row gap="8" vertical="center">
            <img
              src="/images/download_icon/image.png"
              alt="Download"
              style={{
                width: "16px",
                height: "16px",
                filter: isDarkMode ? "invert(1)" : "none",
              }}
            />
            Résumé
          </Row>
        </Button>
      </Row>
      <Row hide s={{ hide: false }}>
        <IconButton
          href="/resume/Kapil_Bamotriya_resume.pdf"
          download="Kapil_Bamotriya_Resume.pdf"
          size="l"
          variant="secondary"
        >
          <img
            src="/images/download_icon/image.png"
            alt="Download"
            style={{
              width: "20px",
              height: "20px",
              filter: isDarkMode ? "invert(1)" : "none",
            }}
          />
        </IconButton>
      </Row>
    </React.Fragment>
  );
};
