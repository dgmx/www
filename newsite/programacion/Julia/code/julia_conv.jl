using Random
using Plots

function convergencia_pi(n)

    dentro = 0
    estimaciones = Float64[]

    for i in 1:n

        x = rand()*2 - 1
        y = rand()*2 - 1

        if x^2 + y^2 <= 1
            dentro += 1
        end

        push!(estimaciones, 4 * dentro / i)

    end

    plot(estimaciones, label="Estimación π")
    hline!([π], label="π real")

end

convergencia_pi(10000)