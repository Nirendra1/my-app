import React from "react";
import "./Fitness.css";
import MessageIcon from '@mui/icons-material/Message';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImportExportIcon from '@mui/icons-material/ImportExport';
const Fitness = () => {
    return (
        <>
            <div className="fitness">
                <h1>Fitness</h1>
               < input type="checkbox"/>
                <p className="goto">Go to the gym</p>
                <ul className="navigator">
                < MessageIcon className="mess"/>
                <PersonAddAltIcon className="per"/>
                <ImportExportIcon className="import"/>
                <MoreHorizIcon className="more"/>
              </ul>
                <hr/>
            </div>
        </>
    )
}

export default Fitness