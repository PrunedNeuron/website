import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const IconsComponent: React.FC = (): JSX.Element => {
    const { data, error } = useSWR("http://localhost:3000/icons", fetcher);

    if (error) return <div>Error loading data...</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>{data.icons.length} Icons Retrieved</h1>
            <div>
                {data.icons.map((icon) => (
                    <div key={icon.id}>
                        <h2>{icon.name}</h2>
                        <p>{icon.component}</p>
                        <p>{icon.url}</p>
                        <p>Requesters: {icon.requesters}</p>
                        <p>Status: {icon.status}</p>
                        <p>Pack: {icon.pack}</p>
                        <p>Created At: {icon.created_at}</p>
                        <p>Updated At: {icon.updated_at}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconsComponent;
