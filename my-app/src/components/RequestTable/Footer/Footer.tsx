import React from 'react';
import {Pagination, SimpleGrid} from "@mantine/core";
import DownloadCsv from "./DownloadCsv/DownloadCsv";
import {FooterProps} from "./Footer.types";

function Footer({fullData, currentPage, setCurrentPage, pagesCount}: FooterProps) {
    return (
        <SimpleGrid mt="sm" display="flex" cols={2} style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Pagination page={currentPage} onChange={setCurrentPage} total={pagesCount}/>

            <DownloadCsv data={fullData}/>
        </SimpleGrid>
    );
}

export default Footer;