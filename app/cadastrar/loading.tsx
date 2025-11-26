import { Skeleton } from "@/components/ui/skeleton"

export default function CadastrarLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>
          <Skeleton className="h-[800px] w-full" />
        </div>
      </div>
    </div>
  )
}
