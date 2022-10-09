import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic( () => import("../../src/components/maps/Map"), {
    ssr: false
})

const MapPage = () => {
    return(
        <main>
            <div>
                <MapWithNoSSR />
            </div>
        </main>
    )
}

export default MapPage;