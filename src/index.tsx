import React, { useState } from "react";
import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import ViewShot from "react-native-view-shot";
import styles from "./styles";
import { DrawingBoardProps } from "./types";

const DrawingBoard: React.FC<DrawingBoardProps> = ({
  viewShotRef,
  paths,
  setPaths,
}) => {
  const [eraseMode, setEraseMode] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<[number, number][]>([]);
  const [drawingAreaWidth, setDrawingAreaWidth] = useState<number>(0);
  const [drawingAreaHeight, setDrawingAreaHeight] = useState<number>(0);
  const [activeTouchId, setActiveTouchId] = useState<number | null>(null); // Tracks the active touch ID
  const [currentEraserX, setCurrentEraserX] = useState<number>(0);
  const [currentEraserY, setCurrentEraserY] = useState<number>(0);

  const handleStart = (evt: any) => {
    const { identifier, locationX, locationY, toolType } = evt.nativeEvent;

    // Reject palm or touch input if the toolType is not 'pen'
    if (toolType && toolType !== "pen") return;

    if (activeTouchId !== null) return; // Ignore new touches when already active

    setActiveTouchId(identifier);
    setCurrentPath([[locationX, locationY]]);
  };

  const handleMove = (evt: any) => {
    const { identifier, locationX, locationY, toolType } = evt.nativeEvent;

    if (eraseMode) {
      setCurrentEraserX(locationX);
      setCurrentEraserY(locationY);
    }

    if (toolType && toolType !== "pen") return; // Ignore palm or touch moves

    if (identifier !== activeTouchId) return;

    if (
      locationX >= 0 &&
      locationX <= drawingAreaWidth &&
      locationY >= 0 &&
      locationY <= drawingAreaHeight
    ) {
      if (eraseMode) {
        setPaths((prevPaths) =>
          prevPaths.flatMap((path) => {
            const newSegments = erasePoints(path.points, locationX, locationY, 30);
            return newSegments.length > 0
              ? newSegments.map((points) => ({ ...path, points }))
              : [];
          })
        );
      } else {
        setCurrentPath((prevPath) => [...prevPath, [locationX, locationY]]);
      }
    }
  };

  const handleEnd = (evt: any) => {
    const { identifier, toolType } = evt.nativeEvent;

    if (toolType && toolType !== "pen") return; // Ignore palm or touch ends

    if (identifier !== activeTouchId) return;

    setPaths((prevPaths) => [...prevPaths, { points: currentPath, isErased: false }]);
    setCurrentPath([]);
    setActiveTouchId(null);
  };

  const erasePoints = (
    points: [number, number][],
    x: number,
    y: number,
    threshold: number
  ): [number, number][][] => {
    const newPaths: [number, number][][] = [];
    let currentSegment: [number, number][] = [];
    let isErasing = false;

    points.forEach(([px, py]) => {
      const distance = Math.hypot(px - x, py - y);

      if (distance > threshold) {
        // Point is outside the eraser threshold, keep it
        if (isErasing) {
          // End the current erased segment and start a new one
          if (currentSegment.length > 0) {
            newPaths.push(currentSegment);
            currentSegment = [];
          }
          isErasing = false;
        }
        currentSegment.push([px, py]);
      } else {
        // Point is within the eraser threshold, skip it
        isErasing = true;
      }
    });

    // Push any remaining segment
    if (currentSegment.length > 0) {
      newPaths.push(currentSegment);
    }

    return newPaths;
  };

  const renderPath = (points: [number, number][]): string => {
    if (points.length < 2) return "";

    let pathData = `M${points[0][0].toFixed(2)},${points[0][1].toFixed(2)}`;
    for (let i = 1; i < points.length - 1; i++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;

      // Use cubic Bezier curve command to smooth the line
      pathData += ` Q${x1.toFixed(2)},${y1.toFixed(2)} ${midX.toFixed(2)},${midY.toFixed(2)}`;
    }

    // Add the last segment
    const [lastX, lastY] = points[points.length - 1];
    pathData += ` L${lastX.toFixed(2)},${lastY.toFixed(2)}`;

    return pathData;
  };

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDrawingAreaWidth(width);
    setDrawingAreaHeight(height);
  };

  return (
    <View style={styles.page}>
      {/* Your buttons and UI elements here */}
      <ViewShot
        ref={viewShotRef}
        options={{ format: "png", quality: 1.0 }}
        style={{ flex: 1, backgroundColor: "#fff" }}
      >
        <View
          style={styles.drawingArea}
          onLayout={handleLayoutChange}
          onStartShouldSetResponder={() => true}
          onResponderStart={handleStart}
          onResponderMove={handleMove}
          onResponderRelease={handleEnd}
        >
          <Svg style={StyleSheet.absoluteFill}>
            {paths.map(
              (path, pathIndex) =>
                !path.isErased && (
                  <Path
                    key={pathIndex}
                    d={renderPath(path.points)}
                    stroke={"black"}
                    strokeWidth="3"
                    fill="none"
                  />
                )
            )}
            {currentPath.length > 0 && (
              <Path
                d={renderPath(currentPath)}
                stroke={"black"}
                strokeWidth="3"
                fill="none"
              />
            )}
            {eraseMode && (
              <Circle
                cx={currentEraserX}
                cy={currentEraserY}
                r={30}
                fill="rgba(0,0,0,0.1)"
              />
            )}
          </Svg>
        </View>
      </ViewShot>
    </View>
  );
};

export default DrawingBoard;
