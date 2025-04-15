const useCharacterLimit = ( title, description ) => {

    const charLimit = 145;
    const truncatedDescription = description.length > charLimit
    ? description.substring(0, charLimit) + '...'
    : description;

    const charLimitTitle = 33;
    const truncatedTitle = title.length > charLimitTitle
    ? title.substring(0, charLimitTitle) + '...'
    : title;

    return { truncatedDescription, truncatedTitle }
};

export default useCharacterLimit;