const CompanyCard = ({ companyName }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{companyName}</h2>
            <p className="mb-4">
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed
                arcu. Cras consequat.
            </p>
            <a href="#" className="p-6 hover:underline">www.company.com</a>
        </div>
    );
};

export default CompanyCard;
