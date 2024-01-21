const HostCard = ({hostName, hostPicture}) => {

  const hostNameSplit = hostName.split(" ");
  
  return (
    <div key="host-container" className="logement__host">
      <p className="host__name">
        {hostNameSplit[0]}
        <br />
        {hostNameSplit[1]}
      </p>
      <img
        src={hostPicture}
        alt={hostName}
        className="host__picture"
      />
    </div>
  );
};

export default HostCard;
