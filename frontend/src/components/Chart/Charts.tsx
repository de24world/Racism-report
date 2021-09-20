import React, { useState } from "react";

// Material UI
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Breadcrumbs,
} from "@material-ui/core/";

// Next.js
import { useTranslation } from "next-i18next";


// Interface
import { IDataProps } from "../../interfaces/interfaces";

// source
import CountryChart from "./CountryChart";
import CityChart from "./CityChart";
import LevelChart from "./LevelChart";
import OffenderChart from "./OffenderChart";
import VictimChart from "./VictimChart";
import DateChart from "./DateChart";

const useStyles = makeStyles((theme) => ({
  root: {},
  charts: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
}));

interface ChartProps {
  items: IDataProps[];
}

function Charts({ items }: ChartProps): JSX.Element {
  const classes = useStyles();
  const [chartState, setChartState] = useState("victim-chart");
  const { t } = useTranslation("common");


  const victimChartChange = () => {
    setChartState("victim-chart");
  };

  const offenderChartChange = () => {
    setChartState("offender-chart");
  };

  const countryChartChange = () => {
    setChartState("country-chart");
  };

  const cityChartChange = () => {
    setChartState("city-chart");
  };

  const levelChartChange = () => {
    setChartState("level-chart");
  };

  const dateChartChange = () => {
    setChartState("date-chart");
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Button color="primary" size="large" onClick={victimChartChange}>
          01. {t("Victim")}
        </Button>
        <Button color="primary" size="large" onClick={offenderChartChange}>
          02. {t("Offender")}
        </Button>
        <Button color="primary" size="large" onClick={countryChartChange}>
          03. {t("Country")}
        </Button>
        <Button color="primary" size="large" onClick={cityChartChange}>
          04. {t("City")}
        </Button>
        <Button color="primary" size="large" onClick={levelChartChange}>
          05. {t("Level")}
        </Button>
        <Button color="primary" size="large" onClick={dateChartChange}>
          06. {t("Date")}
        </Button>
      </Breadcrumbs>
      <div className={classes.charts}>
        {chartState === "victim-chart" && <VictimChart items={items} />}
        {chartState === "offender-chart" && <OffenderChart items={items} />}
        {chartState === "country-chart" && <CountryChart items={items} />}
        {chartState === "city-chart" && <CityChart items={items} />}
        {chartState === "level-chart" && <LevelChart items={items} />}
        {chartState === "date-chart" && <DateChart items={items} />}
      </div>
    </>
  );
}

export default Charts;
