import React from 'react';
import {Text} from "@mantine/core";
import {EmptyContentProps} from "./EmptyContent.types";

function EmptyContent({content}: EmptyContentProps) {
    return (
        <Text w="100%"
              h="100%"
              display="flex"
              sx={{fontSize: 20, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}
        >
            {content}
        </Text>
    );
}

export default EmptyContent;