import React from 'react';
// @ts-ignore
import CsvDownloadButton from 'react-json-to-csv';
import {DownloadCsvProps} from "./DownloadCsv.types";

function DownloadCsv({data}: DownloadCsvProps) {
    return (
        <CsvDownloadButton
            style={{
                padding: "0px 18px",
                width: '12vw',
                height: "36px",
                color: "rgb(255, 255, 255)",
                fontWeight: "550",
                fontSize: "14px",
                textTransform: "uppercase",
                border: "1px solid transparent",
                borderRadius: "4px",
                backgroundColor: "rgb(245, 159, 0)",
                cursor: "pointer"
            }}
            data={data}>
            download csv
        </CsvDownloadButton>
    );
}

export default DownloadCsv;