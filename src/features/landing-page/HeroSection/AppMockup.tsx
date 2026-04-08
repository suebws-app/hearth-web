import React from "react";

export default function AppMockup() {
  const colors = {
    primary: "#9b59b6",
    accent: "#85c1e2",
    success: "#4caf50",
    secondary: "#c39bd3",
  };

  return (
    <div className="flex-1 w-full relative flex items-center justify-center animate-fade-in-scale px-6">
      <div className="relative w-full max-w-[300px] h-[620px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white overflow-hidden">
        <svg
          viewBox="0 0 250 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMin slice"
        >
          <rect width="250" height="540" fill="#f9f7fb" />

          {/* Header */}
          <rect width="250" height="56" fill="white" />
          <line
            x1="0"
            y1="56"
            x2="250"
            y2="56"
            stroke="#f3f4f6"
            strokeWidth="1"
          />

          <text x="14" y="40" fontSize="16" fill="#1f2937" fontWeight="700">
            Sarah
          </text>

          {/* Profile avatar (right side) */}
          <circle cx="220" cy="34" r="16" fill="#e8e0f0" />
          <text
            x="220"
            y="39"
            fontSize="13"
            fill={colors.primary}
            fontWeight="600"
            textAnchor="middle"
          >
            S
          </text>

          {/* Question of the Day */}
          <rect
            x="14"
            y="68"
            rx="16"
            ry="16"
            width="222"
            height="170"
            fill="#e8e0f0"
          />

          <text
            x="210"
            y="108"
            fontSize="42"
            fill="#2c1e3d"
            opacity="0.05"
            fontWeight="500"
          >
            &ldquo;
          </text>

          <text
            x="28"
            y="92"
            fontSize="9"
            fill="#6b7280"
            fontWeight="600"
            letterSpacing="2"
          >
            QUESTION OF THE DAY
          </text>

          <text
            x="28"
            y="116"
            fontSize="15"
            fill="#1f2937"
            fontWeight="500"
            fontFamily="serif"
          >
            What&apos;s one small thing
          </text>
          <text
            x="28"
            y="135"
            fontSize="15"
            fill="#1f2937"
            fontWeight="500"
            fontFamily="serif"
          >
            I did recently that made
          </text>
          <text
            x="28"
            y="154"
            fontSize="15"
            fill="#1f2937"
            fontWeight="500"
            fontFamily="serif"
          >
            you smile?
          </text>

          <line
            x1="28"
            y1="166"
            x2="222"
            y2="166"
            stroke="#d8cfe4"
            strokeWidth="0.5"
          />

          {/* Both answered badge */}
          <rect
            x="28"
            y="174"
            rx="6"
            ry="6"
            width="100"
            height="20"
            fill="#4caf5020"
          />
          <text
            x="37"
            y="188"
            fontSize="9"
            fill={colors.success}
            fontWeight="600"
          >
            Both answered ✓
          </text>

          {/* User answer box */}
          <rect
            x="28"
            y="200"
            rx="9"
            ry="9"
            width="96"
            height="30"
            fill="#9b59b610"
          />
          <circle cx="40" cy="210" r="6" fill={colors.accent} />
          <text
            x="40"
            y="213"
            fontSize="8"
            fill="white"
            fontWeight="600"
            textAnchor="middle"
          >
            S
          </text>
          <text x="34" y="225" fontSize="8" fill="#6b7280">
            Making breakfast
          </text>

          {/* Partner answer box */}
          <rect
            x="130"
            y="200"
            rx="9"
            ry="9"
            width="96"
            height="30"
            fill="#9b59b610"
          />
          <circle cx="142" cy="210" r="6" fill={colors.accent} />
          <text
            x="142"
            y="213"
            fontSize="8"
            fill="white"
            fontWeight="600"
            textAnchor="middle"
          >
            A
          </text>
          <text x="136" y="225" fontSize="8" fill="#6b7280">
            Goodnight texts
          </text>

          {/* Relationship Pulse Card */}
          <rect
            x="14"
            y="246"
            rx="16"
            ry="16"
            width="222"
            height="108"
            fill="white"
            stroke="#e8e0f0"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="286"
            r="22"
            stroke="#e8e0f0"
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx="50"
            cy="286"
            r="22"
            stroke={colors.primary}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="138.2"
            strokeDashoffset="30.4"
            transform="rotate(-90 50 286)"
          />
          <text
            x="50"
            y="291"
            fontSize="13"
            fill="#2c1e3d"
            fontWeight="800"
            textAnchor="middle"
          >
            78%
          </text>

          <text x="82" y="280" fontSize="13" fill="#2c1e3d" fontWeight="600">
            Relationship Pulse
          </text>
          <text
            x="82"
            y="296"
            fontSize="10"
            fill={colors.success}
            fontWeight="500"
          >
            ↑ 5% this week
          </text>

          <line
            x1="28"
            y1="313"
            x2="222"
            y2="313"
            stroke="#e8e0f0"
            strokeWidth="0.8"
          />

          <text
            x="50"
            y="332"
            fontSize="16"
            fill="#2c1e3d"
            fontWeight="700"
            textAnchor="middle"
          >
            248
          </text>
          <text x="50" y="344" fontSize="8" fill="#6b7280" textAnchor="middle">
            Days Together
          </text>
          <line
            x1="93"
            y1="322"
            x2="93"
            y2="346"
            stroke="#e8e0f0"
            strokeWidth="0.8"
          />
          <text
            x="125"
            y="332"
            fontSize="16"
            fill="#2c1e3d"
            fontWeight="700"
            textAnchor="middle"
          >
            86
          </text>
          <text x="125" y="344" fontSize="8" fill="#6b7280" textAnchor="middle">
            Check-ins
          </text>
          <line
            x1="157"
            y1="322"
            x2="157"
            y2="346"
            stroke="#e8e0f0"
            strokeWidth="0.8"
          />
          <text
            x="194"
            y="332"
            fontSize="16"
            fill="#2c1e3d"
            fontWeight="700"
            textAnchor="middle"
          >
            34
          </text>
          <text x="194" y="344" fontSize="8" fill="#6b7280" textAnchor="middle">
            Memories
          </text>

          {/* Daily Checkin Button */}
          <rect
            x="14"
            y="366"
            rx="16"
            ry="16"
            width="222"
            height="48"
            fill={colors.primary}
          />
          <rect
            x="26"
            y="375"
            rx="10"
            ry="10"
            width="32"
            height="30"
            fill="rgba(255,255,255,0.2)"
          />
          {/* Sparkle/check-in icon */}
          <g transform="translate(34.5, 382.5) scale(0.75)">
            <path
              d="M9.18 2.345a.833.833 0 0 1 1.638 0l.875 4.63a1.67 1.67 0 0 0 1.329 1.33l4.63.875a.833.833 0 0 1 0 1.638l-4.63.876a1.67 1.67 0 0 0-1.329 1.328l-.875 4.631a.834.834 0 0 1-1.639 0l-.875-4.631a1.67 1.67 0 0 0-1.329-1.328l-4.63-.876a.833.833 0 0 1 0-1.638l4.63-.876a1.67 1.67 0 0 0 1.329-1.328z"
              stroke="white"
              strokeWidth="1.666"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text x="68" y="392" fontSize="13" fill="white" fontWeight="600">
            Daily Check-in
          </text>
          <text x="68" y="406" fontSize="9" fill="rgba(255,255,255,0.7)">
            How are you feeling today?
          </text>
          <text
            x="224"
            y="398"
            fontSize="16"
            fill="rgba(255,255,255,0.5)"
            textAnchor="end"
          >
            →
          </text>

          {/* Quick Action Buttons Row */}
          {/* Appreciate */}
          <rect
            x="14"
            y="422"
            rx="12"
            ry="12"
            width="52"
            height="56"
            fill="#85c1e220"
          />
          <foreignObject x="14" y="426" width="52" height="32">
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                lineHeight: "32px",
              }}
            >
              🎁
            </div>
          </foreignObject>
          <text
            x="40"
            y="470"
            fontSize="9"
            fill={colors.accent}
            fontWeight="600"
            textAnchor="middle"
          >
            Appreciate
          </text>

          {/* Chat */}
          <rect
            x="71"
            y="422"
            rx="12"
            ry="12"
            width="52"
            height="56"
            fill="#9b59b61A"
          />
          <foreignObject x="71" y="426" width="52" height="32">
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                lineHeight: "32px",
              }}
            >
              💬
            </div>
          </foreignObject>
          <text
            x="97"
            y="470"
            fontSize="9"
            fill={colors.primary}
            fontWeight="600"
            textAnchor="middle"
          >
            Chat
          </text>

          {/* Drawings */}
          <rect
            x="128"
            y="422"
            rx="12"
            ry="12"
            width="52"
            height="56"
            fill="#c39bd320"
          />
          <foreignObject x="128" y="426" width="52" height="32">
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                lineHeight: "32px",
              }}
            >
              🖌️
            </div>
          </foreignObject>
          <text
            x="154"
            y="470"
            fontSize="9"
            fill={colors.primary}
            fontWeight="600"
            textAnchor="middle"
          >
            Drawings
          </text>

          {/* Memories */}
          <rect
            x="184"
            y="422"
            rx="12"
            ry="12"
            width="52"
            height="56"
            fill="#e8e0f0"
          />
          <foreignObject x="184" y="426" width="52" height="32">
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                lineHeight: "32px",
              }}
            >
              📷
            </div>
          </foreignObject>
          <text
            x="210"
            y="470"
            fontSize="9"
            fill="#2c1e3d"
            fontWeight="600"
            textAnchor="middle"
          >
            Memories
          </text>

          {/* Partner Activity Feed */}
          <rect
            x="14"
            y="486"
            rx="14"
            ry="14"
            width="222"
            height="90"
            fill="#85c1e20F"
          />

          <circle cx="32" cy="504" r="9" fill={colors.accent} />
          <text
            x="32"
            y="508"
            fontSize="9"
            fill="white"
            fontWeight="700"
            textAnchor="middle"
          >
            A
          </text>
          <text x="47" y="508" fontSize="11" fill="#2c1e3d" fontWeight="600">
            Alex&apos;s Activity
          </text>

          <line
            x1="27"
            y1="519"
            x2="27"
            y2="566"
            stroke="#e8e0f0"
            strokeWidth="1.5"
          />

          <circle
            cx="27"
            cy="528"
            r="4"
            fill={colors.primary}
            stroke="#85c1e20F"
            strokeWidth="2"
          />
          <text x="39" y="528" fontSize="9" fill="#2c1e3d" fontWeight="500">
            Answered today&apos;s question
          </text>
          <text x="39" y="540" fontSize="8" fill="#6b7280">
            2 hours ago
          </text>

          <circle
            cx="27"
            cy="554"
            r="4"
            fill={colors.accent}
            stroke="#85c1e20F"
            strokeWidth="2"
          />
          <text x="39" y="554" fontSize="9" fill="#2c1e3d" fontWeight="500">
            Sent you an appreciation
          </text>
          <text x="39" y="566" fontSize="8" fill="#6b7280">
            5 hours ago
          </text>

          {/* Notch */}
          <rect
            x="75"
            y="0"
            rx="12"
            ry="12"
            width="100"
            height="24"
            fill="black"
          />
        </svg>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30" />
      </div>

      <div
        className="absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-20 -z-10"
        style={{ backgroundColor: colors.accent }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full blur-3xl opacity-20 -z-10"
        style={{ backgroundColor: colors.primary }}
      />
    </div>
  );
}
