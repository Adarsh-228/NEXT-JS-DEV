const Layout = ( { children }: { children: React.ReactNode }) => {
    return (
        <div>{children} 
        <p className="text-3xl">DASHBOARD</p>
        </div>
    )
}
export default Layout;