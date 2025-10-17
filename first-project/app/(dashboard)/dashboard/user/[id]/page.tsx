const Page = ( { params }: { params: {id:string}}) => {
    const { id } = params;
  return (
      <div> USER { id } DETAILS PAGE  </div>
      
  )
}

export default Page;
