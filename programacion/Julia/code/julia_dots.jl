using Random
using Plots

function montecarlo_plot(n)

    x_in = Float64[]
    y_in = Float64[]
    x_out = Float64[]
    y_out = Float64[]

    dentro = 0

    for i in 1:n

        x = rand()*2 - 1
        y = rand()*2 - 1

        if x^2 + y^2 <= 1
            dentro += 1
            push!(x_in, x)
            push!(y_in, y)
        else
            push!(x_out, x)
            push!(y_out, y)
        end
    end

    pi_est = 4 * dentro / n
    println("π ≈ ", pi_est)

    scatter(x_in, y_in, markersize=1)
    scatter!(x_out, y_out, markersize=1)

end

montecarlo_plot(5000)