import React from "react";
import IconUsers from "@/assets/icons/users";
import IconMessageCircle from "@/assets/icons/message-circle";
import IconCamera from "@/assets/icons/camera";
import IconGlobe from "@/assets/icons/globe";

export const stats = [
  {
    labelKey: "landing.stats.couples_connected",
    value: 50328,
    icon: React.createElement(IconUsers, { className: "w-5 h-5" }),
  },
  {
    labelKey: "landing.stats.questions_answered",
    value: 2500000,
    icon: React.createElement(IconMessageCircle, { className: "w-5 h-5" }),
  },
  {
    labelKey: "landing.stats.memories_shared",
    value: 1003440,
    icon: React.createElement(IconCamera, { className: "w-5 h-5" }),
  },
  {
    labelKey: "landing.stats.countries",
    value: "120+",
    icon: React.createElement(IconGlobe, { className: "w-5 h-5" }),
  },
];
