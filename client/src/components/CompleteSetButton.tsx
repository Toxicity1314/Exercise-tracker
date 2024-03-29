import React, { useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

enum CompleteSetOptions {
  COMPLETE = "COMPLETE",
  EDIT = "EDIT",
  SKIP = "SKIP",
}

const completeSetOptionsCopyMap = new Map<CompleteSetOptions, string>([
  [CompleteSetOptions.COMPLETE, "Complete Set"],
  [CompleteSetOptions.SKIP, "Skip Set"],
  [CompleteSetOptions.EDIT, "Edit Set"],
]);

type CompleteSetButtonProps = {
  completeSet: (setId: number) => void;
  exerciseSetId: number;
  editSet: () => void;
};

const options = Object.values(CompleteSetOptions);

export default function CompleteSetButton({
  completeSet,
  exerciseSetId,
  editSet,
}: CompleteSetButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [menuItemClicked, setMenuItemClicked] = React.useState(false);

  const handleClick = useCallback(() => {
    const option = options[selectedIndex];
    if (option === CompleteSetOptions.COMPLETE) {
      completeSet(exerciseSetId);
    } else if (option === CompleteSetOptions.EDIT) {
      editSet();
    }

    return;
  }, [selectedIndex, completeSet, exerciseSetId, editSet]);

  useEffect(() => {
    if (!menuItemClicked) {
      return;
    }

    handleClick();
  }, [selectedIndex, menuItemClicked, handleClick]);

  const handleMenuItemClick = async (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    await setSelectedIndex(index);
    await setOpen(false);
    await setMenuItemClicked(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}>
          {completeSetOptionsCopyMap.get(options[selectedIndex])}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      disabled={index === 2}
                    >
                      {completeSetOptionsCopyMap.get(option)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
