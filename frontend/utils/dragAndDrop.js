export const onDragEnd = (result, lists, setLists) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedLists = [...lists];

    // Move item logic here
    // Update lists state
    setLists(updatedLists);
};
